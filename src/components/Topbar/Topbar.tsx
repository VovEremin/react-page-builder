import { useEditor } from "@craftjs/core";

export default function Topbar () {
    const { actions, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );
    return (
        <div className='w-full'>
            <div className="flex items-center justify-between bg-red-300 py-3 px-5 rounded">
                <div className='flex items-center'>
                    <input type="checkbox" name="enable" id="enable"
                           checked={enabled}
                           onChange={() => actions.setOptions(options => options.enabled = !options.enabled)}
                    />
                    <label className='ml-3' htmlFor="enable">Enable edit mode</label>
                </div>
                <div>
                    <button
                        className={`bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-0.5 px-3 text-sm rounded ${!canUndo ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!canUndo}
                        onClick={() => actions.history.undo()}
                    >
                        Undo
                    </button>
                    <button
                        className={`bg-blue-500 uppercase hover:bg-blue-700 text-white font-bold py-0.5 px-3 text-sm rounded ml-5 ${!canRedo ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!canRedo}
                        onClick={() => actions.history.redo()}
                    >
                        Redo
                    </button>
                </div>
            </div>
        </div>
    );
}