import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-secondary text-secondary-foreground py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-secondary-foreground/10 rounded-full p-4">
                    <Mail className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-lg opacity-90">
                  Recibirás noticias sobre nuevos cursos y contenido exclusivo sobre música clásica.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Mantente al tanto
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                    Suscríbete para recibir información sobre nuevos cursos, artículos de divulgación musical y contenido exclusivo
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {logic.isSubmitting ? 'Enviando...' : 'Suscribirse'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};