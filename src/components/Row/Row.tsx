import React, {ChangeEvent} from 'react'
import {useNode} from "@craftjs/core";

const justifyArray: string[] = ['space-between', 'center', 'space-around', 'space-evenly', 'flex-start', 'flex-end']
const alignArray: string[] = ['flex-start', 'flex-end', 'baseline', 'stretch', 'center']
const colorsArray: string[] = ['bg-red-500', 'bg-blue-500', 'bg-gray-300']

interface IRowContainer {
    children?: React.ReactNode
    background?: string
    padding?: number
    justify?: string
    align?: string
}

export default function Row ({children, background, padding, justify, align}: IRowContainer) {
    const { connectors: {connect, drag} } = useNode();

    const styles = {
        padding: padding ? padding + 'em' : '',
    }

    let justifyContent
    switch (justify) {
        case 'flex-start': justifyContent = 'justify-start'; break;
        case 'flex-end': justifyContent = 'justify-end'; break;
        case 'center': justifyContent = 'justify-center'; break;
        case 'space-around': justifyContent = 'justify-around'; break;
        case 'space-evenly': justifyContent = 'justify-evenly'; break;
        case 'space-between': justifyContent = 'justify-between'; break;
        default: justifyContent = 'justify-between'
    }

    let alignItems
    switch (align) {
        case 'flex-start': alignItems = 'items-start'; break;
        case 'flex-end': alignItems = 'items-end'; break;
        case 'baseline': alignItems = 'items-baseline'; break;
        case 'stretch': alignItems = 'items-stretch'; break;
        case 'center': alignItems = 'items-center'; break;
        default: alignItems = 'items-center'
    }


    return (
        <div
            style={styles}
            className={`lg:container w-full flex ${background} ${justifyContent} ${alignItems}`}
            ref={(ref: HTMLDivElement) => connect(drag(ref))}
        >
            {children}
        </div>
    )
}

export function RowSettings () {
    const { background, padding, justify, align, actions: {setProp} } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
        justify: node.data.props.justify,
        align: node.data.props.align
    }));

    return (
        <div>
            <form>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="rowSetting2">Padding</label>
                    <input type="range" id="rowSetting2" name="padding"
                           min={0.2}
                           max={5}
                           step={0.2}
                           defaultValue={padding}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.padding = e.target.value))}
                    />
                </div>
            </form>
            <form className='mt-4'>
                <h1 className='font-bold'>Justify Content</h1>
                {
                    justifyArray.map((item: string, index: number) => {
                        return (
                            <div className='flex mt-2 items-center' key={`${item}_${index}`}>
                                <input type="radio" id={`${item}_${index}`} name="justify"
                                       checked={justify === item}
                                       onChange={() => setProp((props) => (props.justify = item))}
                                />
                                <label className='ml-2 capitalize' htmlFor={`${item}_${index}`}>{item}</label>
                            </div>
                        )
                    })
                }
            </form>
            <form className='mt-4'>
                <h1 className='font-bold'>Align Items</h1>
                {
                    alignArray.map((item, index) => {
                        return (
                            <div className='flex mt-2 items-center' key={`${item}_${index}`}>
                                <input type="radio" id={`${item}_${index}`} name="align"
                                       checked={align === item}
                                       onChange={() => setProp((props) => (props.align = item))}
                                />
                                <label className='ml-2 capitalize' htmlFor={`${item}_${index}`}>{item}</label>
                            </div>
                        )
                    })
                }
            </form>
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
        </div>
    )
}

export const RowDefaultProps = {
    background : "bg-gray-300",
    padding: 1,
    justify: 'space-between',
    align: 'center'
};

Row.craft = {
    props: RowDefaultProps,
    related: {
        settings: RowSettings,
    },
}
