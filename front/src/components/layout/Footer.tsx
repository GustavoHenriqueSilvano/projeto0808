import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { brand } from '@/config/site'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>
          © {currentYear} {brand.name} · Ambiente Brasil
        </span>
        <Link className={styles.link} to="/login">
          Portal de acesso
        </Link>
      </Container>
    </footer>
  )
}
