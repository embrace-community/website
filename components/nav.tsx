import Icons from '../components/icons';
import Link from 'next/link';

export default function Nav() {
    return (
    <div className="w-full flex flex-row items-end justify-end px-7 py-7">
        {/* <Link href=""><Icons.DiscordLogo width="26" fill="#35281E" /></Link> */}
        {/* <Link href="https://github.com/embrace-community"><Icons.GithubLogo width="26" fill="#35281E" /></Link> */}
        <a href="https://github.com/embrace-community"><Icons.GithubLogo width="26" fill="#35281E" /></a>
    </div>);
  }
  