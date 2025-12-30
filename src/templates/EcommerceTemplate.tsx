import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { Input } from '@/components/ui/input'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()

  const header = (
    <div className={`py-4 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {!loadingCollections && hasCollections && (
                <ScrollLink 
                  to="/#collections" 
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                >
                  Colecciones
                </ScrollLink>
              )}
              <ScrollLink 
                to="/#products" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Cursos
              </ScrollLink>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-primary text-primary-foreground py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Apreciación Musical</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Cursos en línea para descubrir y comprender la música clásica con rigor y cercanía
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Navegación</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Inicio
              </Link>
              <ScrollLink 
                to="/#collections" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Colecciones
              </ScrollLink>
              <ScrollLink 
                to="/#products" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Cursos
              </ScrollLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contacto</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Para consultas sobre los cursos, escríbenos y te responderemos a la brevedad.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/70">
          <p>&copy; 2025 Apreciación Musical. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}