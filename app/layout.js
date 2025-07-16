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
            <h1 className="text">
              food menu
            </h1>
            {/* <ScoreBar /> */}
            <CategoryBarClient>
              {children}
            </CategoryBarClient>
          </div>
        </div>
      </body>
    </html>
  );
}
