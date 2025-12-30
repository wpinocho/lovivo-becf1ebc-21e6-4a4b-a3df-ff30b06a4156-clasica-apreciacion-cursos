import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Sin imagen
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-foreground font-semibold text-xl mb-2 leading-tight">
              {collection.name}
            </h3>
          </div>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Cursos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}