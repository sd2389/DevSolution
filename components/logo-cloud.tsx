interface Logo {
  name: string
  src?: string
}

interface LogoCloudProps {
  logos: Logo[]
  title?: string
}

export function LogoCloud({ logos, title }: LogoCloudProps) {
  return (
    <div className="text-center">
      {title && (
        <p className="text-sm font-medium text-muted-foreground mb-8">{title}</p>
      )}
      <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 w-auto object-contain"
              />
            ) : (
              <span className="text-xl font-semibold text-muted-foreground">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
