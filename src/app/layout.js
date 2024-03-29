import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import "./globals.css";


export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AppHeader />
                
                {children}
                <AppFooter/>
            </body>
        </html>
    );
}
