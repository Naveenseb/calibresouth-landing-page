import { useState } from 'react'

interface PhoneFormProps {
  buttonText?: string
  successMessage?: string
  note?: string
}

export function PhoneForm({
  buttonText = 'Stay in the Loop',
  successMessage = "You're on the list. We'll reach out before launch.",
  note,
}: PhoneFormProps) {
  const [phone,     setPhone]     = useState('')
  const [agreed,    setAgreed]    = useState(false)
  const [submitted, setSubmitted] = useState(() => {
    const leads = JSON.parse(localStorage.getItem('cs_leads') || '[]') as unknown[]
    return leads.length > 0
  })
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))
    setError('')
  }

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    if (phone.length < 10) { setError('Please enter a valid 10-digit number.'); return }
    if (!agreed)            { setError('Please accept the consent to continue.'); return }

    setLoading(true)

    const payload = { phone, ts: new Date().toISOString() }

    const existing = JSON.parse(localStorage.getItem('cs_leads') || '[]') as unknown[]
    existing.push(payload)
    localStorage.setItem('cs_leads', JSON.stringify(existing))

    const endpoint = import.meta.env.VITE_SHEET_ENDPOINT as string | undefined
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } catch {
        // localStorage backup already saved
      }
    }

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="inline-flex items-center gap-3 px-5 py-[14px] border border-accent/25 bg-accent/5">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M1.5 6.5L5 10L11.5 3" stroke="#E8521A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[0.8rem] text-muted font-body font-light">{successMessage}</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-input-row">
        <input
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="WhatsApp number"
          className="flex-1 bg-white/3 border-none outline-none px-5 h-14 font-body text-[0.9rem] font-light text-muted caret-accent"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-accent font-display font-bold text-[0.68rem] tracking-[0.14em] text-bg uppercase whitespace-nowrap px-6 h-14 hover:tracking-[0.22em] hover:opacity-90 cursor-pointer transition-all duration-300 disabled:opacity-60"
        >
          {loading ? '...' : buttonText}
        </button>
      </div>

      <label className="flex items-start gap-3 mt-7 cursor-pointer text-left">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setAgreed(e.target.checked); setError('') }}
        />
        <span className="font-body text-[0.65rem] text-muted leading-relaxed tracking-[0.02em]">
          I agree to be contacted on WhatsApp with early access updates about CalibreSouth. No spam, ever.
        </span>
      </label>

      {error && (
        <p className="mt-2 text-[0.65rem] font-body tracking-[0.02em] text-[#e07a5a] text-left">{error}</p>
      )}
      {note && (
        <p className="mt-3 text-center font-body text-[0.6rem] tracking-[0.2em] uppercase text-dim">{note}</p>
      )}
    </form>
  )
}
