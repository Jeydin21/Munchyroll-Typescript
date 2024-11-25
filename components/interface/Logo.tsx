import Link from 'next/link';
import { Icon, Icons }  from '@/components/Icon';

interface LogoProps {
  clickable?: boolean;
}

function Logo({ clickable }: LogoProps) {
  return (
    <>
      {clickable ? (
        <Link href="/">
          <div className="transition-all inline-flex items-center space-x-2 text-white bg-slate-600 bg-opacity-50 rounded-full px-4 py-2 hover:scale-105 hover:bg-slate-600 backdrop-blur-lg active:scale-95">
            <Icon icon={Icons.MOVIE_WEB} className="text-xl text-purple-400" />
            <h1 className="text-xl font-semibold">Munchyroll</h1>
          </div>
        </Link>
      ) : (
        <div className="transition-all inline-flex items-center space-x-2 text-white bg-slate-600 bg-opacity-50 rounded-full px-4 py-2">
          <Icon icon={Icons.MOVIE_WEB} className="text-xl text-purple-400" />
          <h1 className="text-xl font-semibold">Munchyroll</h1>
        </div>
      )}
    </>
  );
}

export default Logo;