
type ProfileCardProps = {
    name?: string;
    year: number;
    job?: string;
}

const ProfileCard = (props : ProfileCardProps) => {
    return (
        <div className="card">
            <p>Name:{props.name}</p>
            <p>Birth Year :{props.year}</p>
            {/*if ternary */}
            {props.job && <p>Job :{props.job}</p> }
            
        </div>
    )
}

export default ProfileCard

// Pakai JavaScript setting default value cara 1 

// const ProfileCard = (props : ProfileCardProps) => {
//     const { name = "Anonymous", year, job} = props;
//     return (
//         <div className="card">
//             <p>Name:{name}</p>
//             <p>Birth Year :{year}</p>
//             {/*if ternary */}
//             {job && <p>Job :{job}</p> }
            
//         </div>
//     )
// }

// export default ProfileCard


// Pakai JavaScript setting default value cara 2 

// const ProfileCard = (props : ProfileCardProps) => {
//     return (
//         <div className="card">
//             <p>Name:{name || "Anonymous"}</p>
//             <p>Birth Year :{year}</p>
//             {/*if ternary */}
//             {job && <p>Job :{job}</p> }
            
//         </div>
//     )
// }

// export default ProfileCard