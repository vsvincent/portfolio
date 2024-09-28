import { NavigationItem } from "@/types/ui"
import Link from "next/link"

interface HeroNavProps {
    navigation: NavigationItem[];
  }

  const HeroNav: React.FC<HeroNavProps> = ({ navigation }) => {
    return (
        <nav className="my-16 animate-fade-in z-50">
        
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-500 text-zinc-500 hover:text-zinc-300 hover:underline underline-offset-4 decoration-2"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    )}
export default HeroNav