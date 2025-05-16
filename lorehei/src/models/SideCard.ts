export interface SideCardProps {
  title?: string
  content?: string
  image?: string | null
  textAlign?: string
  onImageClick?: (src: string) => void
}