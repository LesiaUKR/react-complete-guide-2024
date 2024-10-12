import logo from '../assets/logo.png';
// import './Header.css';
// import classes from './Header.module.css';
// import { StyledHeader } from './Header.styled';

// export default function Header() {
//   return (
//     <StyledHeader>
//       <img src={logo} alt="A canvas" />
//       <h1>ReactArt</h1>
//       {/* в проп style передаємо інлайнові стилі як об'єкт, де властивість ключ, і значення властивості
//       інлайновий стиль впливає лише на елемент, на якому він вказаний
//       */}
//       {/* <p style={{
//         color: 'red',
//         textAlign: 'left',
//       }}>A community of artists and art-lovers.</p> */}
// {/* 
// <p className={`${classes.paragraph}`}>A community of artists and art-lovers.</p> */}
// <p>A community of artists and art-lovers.</p>
//     </StyledHeader>
//   );
// }

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44 object-contain"/>
      <h1 className="text-xl md:text-4xl font-semibold tracking-wider text-center uppercase text-amber-800 font-title">ReactArt</h1>
      {/* в проп style передаємо інлайнові стилі як об'єкт, де властивість ключ, і значення властивості
      інлайновий стиль впливає лише на елемент, на якому він вказаний
      */}
      {/* <p style={{
        color: 'red',
        textAlign: 'left',
      }}>A community of artists and art-lovers.</p> */}
{/* 
<p className={`${classes.paragraph}`}>A community of artists and art-lovers.</p> */}
<p className='text-stone-500' >A community of artists and art-lovers.</p>
    </header>
  );
}