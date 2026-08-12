import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styles from './Button.module.css'

type Variant = 'primary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface StyleProps {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  className?: string
}

function buttonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className,
}: StyleProps) {
  return [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    />
  )
}

/** Mesmo visual do Button, mas navega. Use para rotas internas. */
type ButtonLinkProps = StyleProps & LinkProps

export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    />
  )
}

/** Mesmo visual do Button, para âncoras na própria página (#planos). */
type ButtonAnchorProps = StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function ButtonAnchor({
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: ButtonAnchorProps) {
  return (
    <a
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    />
  )
}
