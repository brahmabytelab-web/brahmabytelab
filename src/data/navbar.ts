import { ROUTES } from "@/routes";
import {
  Home,
  Users,
  Image as ImageIcon,
  Layers,
  AppWindow,
} from "lucide-react";
export const navbarData = [
  { label: "Home", href: ROUTES.home, icon: Home },
  { label: "About", href: ROUTES.about, icon: Users },
  { label: "Services", href: ROUTES.services, icon: Layers },
  { label: "Products", href: ROUTES.products, icon: AppWindow },
  { label: "Gallery", href: ROUTES.gallery, icon: ImageIcon },
];
