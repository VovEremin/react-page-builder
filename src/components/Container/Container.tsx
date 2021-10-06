import React, {ChangeEvent} from 'react'
import {useNode} from "@craftjs/core";

const colorsArray: string[] = ['bg-red-300', 'bg-blue-300', 'bg-gray-200', 'bg-gray-100']

interface IPropsContainer {
    children?: React.ReactNode
    background?: string
    padding?: number
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
}

export default function Container ({children, background, padding, marginTop, marginBottom, marginLeft, marginRight}: IPropsContainer) {
    const { connectors: {connect, drag} } = useNode();

    const styles = {
        padding: padding + 'em',
        marginTop: marginTop + 'px',
        marginBottom: marginBottom + 'px',
        marginLeft: marginLeft + 'px',
        marginRight: marginRight + 'px',
    }

    return (
        <div
            className={`lg:container w-full ${background}`}
            style={styles}
            ref={(ref: HTMLDivElement) => connect(drag(ref))}
        >
            {children}
        </div>
    )
}

export function ContainerSettings () {
    const { background, padding, marginTop, marginBottom, marginLeft, marginRight, actions: {setProp} } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
        marginTop: node.data.props.marginTop,
        marginBottom: node.data.props.marginBottom,
        marginLeft: node.data.props.marginLeft,
        marginRight: node.data.props.marginRight,
    }));

    return (
        <div>
            <form>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="buttonSetting2">Padding</label>
                    <input type="range" id="containerSetting2" name="padding"
                           min={0.2}
                           max={5}
                           step={0.2}
                           defaultValue={padding}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.padding = e.target.value))}
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="buttonSetting3">MarginTop</label>
                    <input type="range" id="containerSetting3" name="marginTop"
                           min={0}
                           max={50}
                           step={1}
                           defaultValue={marginTop}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.marginTop = e.target.value))}
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="buttonSetting4">MarginBottom</label>
                    <input type="range" id="containerSetting4" name="marginBottom"
                           min={0}
                           max={50}
                           step={1}
                           defaultValue={marginBottom}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.marginBottom = e.target.value))}
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="buttonSetting5">MarginLeft</label>
                    <input type="range" id="containerSetting5" name="marginLeft"
                           min={0}
                           max={50}
                           step={1}
                           defaultValue={marginLeft}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.marginLeft = e.target.value))}
                    />
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="buttonSetting6">MarginRight</label>
                    <input type="range" id="containerSetting6" name="marginLeft"
                           min={0}
                           max={50}
                           step={1}
                           defaultValue={marginRight}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setProp((props) => (props.marginRight = e.target.value))}
                    />
                </div>
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

export const ContainerDefaultProps = {
    background : "bg-gray-200",
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
}