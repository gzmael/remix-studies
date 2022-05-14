export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function niceDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
    timeZone: 'America/Fortaleza'
  }
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
}