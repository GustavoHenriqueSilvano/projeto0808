import type { SVGProps } from 'react'

// Ícones inline: sem dependência externa e sem request extra.
// Todos desenhados em grade 24x24, traço 1.5, para ficarem visualmente iguais.
const paths = {
  kanban: <path d="M4 5v14M12 5v9M20 5v12" />,
  inbox: (
    <>
      <path d="M4 13h4l1.5 3h5L16 13h4" />
      <path d="M5.5 5h13l1.5 8v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8M17.5 19a5.5 5.5 0 0 0-2.2-4.4" />
    </>
  ),
  automation: (
    <>
      <path d="M4 8h11a3 3 0 0 1 0 6H9" />
      <path d="M7 5 4 8l3 3M17 13l3 3-3 3" />
      <path d="M20 16H9" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M8 20v-6M13 20V9M18 20v-9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v6c0 4-3 7-7 8.5C8 19 5 16 5 12V6z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.3 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.3-3.3-8.5S9.8 5.9 12 3.5z" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrowRight: <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
} as const

export type IconName = keyof typeof paths

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
