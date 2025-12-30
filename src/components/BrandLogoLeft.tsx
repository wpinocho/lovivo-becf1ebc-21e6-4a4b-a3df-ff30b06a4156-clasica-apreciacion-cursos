export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="flex items-center gap-3">
      <img 
        src="/logo.svg" 
        alt="Logo"
        className="h-10 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-2xl font-bold text-foreground">
        Apreciación Musical
      </span>
    </a>
  )
}