import { FC, DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from "react";


export const Toggle: FC<IToggle> = ({ values, name }) => {
    return (<form>
        {values.map((value) =>
            <label>
                {value.title}
                <input type="radio" name={name} value={value.value} />
            </label>
        )}

    </form>
    )
}


interface IToggle extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    values: IToggleValue[]
    name: string
}


interface IToggleValue {
    title: string
    value: string
}