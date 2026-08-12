import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { brand, navLinks } from '@/config/site'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#topo">
          <span className={styles.mark} aria-hidden="true">
            {brand.initial}
          </span>
          {brand.name}
        </a>

        <nav className={styles.nav} aria-label="Seções da página">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <ButtonLink to="/login" variant="ghost" size="sm">
          Entrar
        </ButtonLink>
      </Container>
    </header>
  )
}
