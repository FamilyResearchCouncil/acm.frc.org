import {StyledStaffLink} from "./staffLink.styled";
import Image from "next/image";

const StaffLink = (props) => (
    <StyledStaffLink href={props.href}>
        <img src={props.imgageUrl} />
        <span>{props.staffName}</span>
    </StyledStaffLink>
);

export default StaffLink;