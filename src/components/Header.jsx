import chefIcon from '../assets/cooking.png';

export default function Header() {
    return (
        <header>
            <img src={chefIcon} alt="" />
            <h1>Chef AiAll</h1>
        </header>
    )
}