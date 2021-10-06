import React from 'react'
import { useEditor } from "@craftjs/core";

export default function SettingsPanel () {
    const { actions, selected } = useEditor((state, query) => {
        const currentNodeId = state.events.selected;
        let selected;

        if ( currentNodeId ) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable()
            };
        }

        return {
            selected
        }
    })

    return selected ? (
        <div className='bg-gray-200 w-60 p-4 rounded-md mt-2'>
            <div className='flex justify-between items-center'>
                <h3>Selected</h3>
                <p className='px-4 py-0.5 rounded-xl border-solid border-gray-500 border text-sm'>{selected.name}</p>
            </div>
            {
                selected.settings && React.createElement(selected.settings)
            }
            {
                selected.isDeletable && (
                    <button className="bg-transparent w-full mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={() => {
                                actions.delete(selected.id);
                            }}
                    >
                        Delete
                    </button>
                )
            }
        </div>
    ) : null
}