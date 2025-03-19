import { IButtonProps } from "../interfaces";

//Übergabe Funktion un dInhalt über Props
const Button = ({name, onClickFunction}: IButtonProps) => {

    return (
        <button onClick={()=>onClickFunction()} className="bg-indigo-300 lg:flex-1 border border-black w-full h-10 text-sm cursor-pointer hover:scale-105">{name}</button>
      );
}
 
export default Button;