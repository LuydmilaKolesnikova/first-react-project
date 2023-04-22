const ProfileStatus = (props) => {
    return <div>
        {!props.editMode && <div><span onDoubleClick={props.activateEditMode}>{props.status}</span></div>}
        {props.editMode && <div><input autoFocus onBlur={props.deactivateEditMode} value={props.status}></input></div>}

    </div>
}

export default ProfileStatus;