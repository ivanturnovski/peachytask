import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";
import BestSellers from "@/shopify/sections/bestsellers";

register("header", Header);
register("bestsellers", BestSellers);
load("*");
