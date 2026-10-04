export default function TotalMarketCard({image , name , price , percent }) {
    return (
        <div className="border-2 border-[#0f1828] rounded-lg bg-[#050f1e] p-3">
            <div className="flex gap-2 mb-3">
                <Image className="h-[fit-content]" src={image} alt="image" width={40} height={40} />
                <div>
                    <p className="text-md">{name}</p>
                    <p className="text-xs text-[#9ea3af]">{price}</p>
                    <p className="mb-3">${percent}</p>
                </div>
            </div>
            
        </div>
    )
}