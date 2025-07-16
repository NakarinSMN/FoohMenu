import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CategoryBarClient from './CategoryBarClient';
// import ScoreBar from './ScoreBar';

export const metadata = {
  title: 'FoohMenu',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <footer className="footer">
          <span>© 2024 FoohMenu</span>
        </footer>
      </body>
    </html>
  );
}
