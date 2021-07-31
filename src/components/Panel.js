function Pannel({handleCancel,handleConfirm,handleChange,content}){

    return (
        <div className="flex justify-center items-center z-40 w-screen h-screen fixed inset-0 bg-gray-400 bg-opacity-50">
            <div className="w-60 h-72 bg-white-base md:w-96 rounded-lg flex flex-col justify-between">
                <h3 className="text-center py-4 bg-blue-200 text-gray-50 text-lg font-bold">ADD TODO</h3>
                <textarea onChange={handleChange} value={content} className="py-1 px-2 resize-none border-2 border-gray-400 rounded-md w-2/3 h-1/2 self-center outline-none" autoFocus></textarea>
                <div className="self-center space-x-4 mb-4 md:space-x-6">
                    <button onClick={handleCancel} className="px-4 bg-gray-200 rounded-lg py-1 text-xs text-white-base md:py-2 md:text-sm md:px-6">取消</button>
                    <button onClick={handleConfirm} className="px-4 bg-blue-200 rounded-lg py-1 text-xs text-white-base md:py-2 md:text-sm md:px-6">确定</button>
                </div>
            </div>
        </div>
    )
}

export default Pannel;
