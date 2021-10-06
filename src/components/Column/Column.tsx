import React, {ChangeEvent} from 'react'
import {useNode} from "@craftjs/core";

const colorsArray: string[] = ['bg-red-500', 'bg-blue-500', 'bg-gray-300']

interface IColumnContainer {
    children?: React.ReactNode
    background?: string
    width: number
    padding?: number
}

export default function Column ({children, background, width, padding}: IColumnContainer) {
    const { connectors: {connect, drag} } = useNode();

    const styles = {
        background: background ? background : '',
        padding: padding ? padding + 'em' : '',
        width: width ? width + 'px' : ''
    }

    return (
        <div
            className={`${background}`}
            style={styles}
            ref={(ref: HTMLDivElement) => connect(drag(ref))}
        >
            {children}
        </div>
    )
}

export function ColumnSettings () {
    const { background, width, padding, actions: {setProp} } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
        width: node.data.props.width
    }));

    return (
        <div>
            <form className='mt-2'>
                <h4 className='font-bold'>Background Color</h4>
                {
                    colorsArray.map((item, index) => {
                        return (
                            <div className='mt-1' key={`${item}_${index}`}>
                                <input type="radio" id={`${item}_${index}`} name="color"
                                       checked={background === item}
                                       onChange={() => setProp((props) => (props.background = item))}
                                />
                                <label className='ml-2 capitalize' htmlFor={`${item}_${index}`}>{item}</label>
                            </div>
                        )
                    })
                }
            </form>
            <form>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="columnSetting2">Padding</label>
                    <input type="range" id="columnSetting2" name="padding"
                           min={0.2}
                           max={5}
                           step={0.2}
                           defaultValue={padding}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.padding = e.target.value))}
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="columnSetting3">Width</label>
                    <input type="range" name="width" id="columnSetting3"
                           min={20}
                           max={200}
                           step={1}
                           defaultValue={width}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.width = e.target.value))}
                    />
                </div>
            </form>
        </div>
    )
}

export const ColumnDefaultProps = {
    background : "bg-red-500",
    width: 100,
    padding: 1
};

Column.craft = {
    props: ColumnDefaultProps,
    related: {
        settings: ColumnSettings,
    },
}