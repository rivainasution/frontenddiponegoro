import SetupList from "./SetupList";

function Reported({title, onClick}){
    const titles="Setup List";

    return(
        <div className="mx-5">
            <h3 className="text-center">{title}</h3>
            <SetupList 
                title={titles}
                onClick={onClick}  
            />
        </div>
    );
}

export default Reported;