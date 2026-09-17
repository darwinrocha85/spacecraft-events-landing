// Precio por defecto cuando la nave no tiene `ticketPrice` configurado en el admin.
// Debe coincidir con BankInPaymentService.DEFAULT_TICKET_PRICE en el backend. El
// endpoint /api/marketing/experiences ya aplica este fallback, pero se deja acá
// también por si en algún momento se consume otro endpoint sin el fallback.
export const DEFAULT_TICKET_PRICE = 25.0

export function formatMoney(amount) {
  if (amount === null || amount === undefined) return '—'
  return `$${Number(amount).toFixed(2)}`
}
