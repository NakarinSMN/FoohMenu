import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryBarClient from './CategoryBarClient';
import CacheManager from './components/CacheManager';
// import ScoreBar from './ScoreBar';

export const metadata = {
  title: 'FoohMenu',
  description: "เมนูอาหารอร่อย"
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0s/all.min.css" />
      </head>
      <body>
        <div className="header">
          <div className="head-main">

            {/* <ScoreBar /> */}
            <CategoryBarClient>
              {children}
            </CategoryBarClient>
          </div>
        </div>
        <CacheManager />
        <footer className="footer">
          <span>© 2025 rkjmenu by smn dev</span>
        </footer>
      </body>
    </html>
  );
}
