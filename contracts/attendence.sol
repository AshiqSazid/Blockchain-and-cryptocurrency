// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract attendance {
    address public instructor;
    string public courseId;
    uint public date;
    bool public enabled;
    uint[] public attendance_record;
    address[] public attendee_list;
    constructor(uint _date, string memory _courseId){
        instructor=msg.sender;
        courseId=_courseId;
        date=_date;
    }
    function enable() public {
        require(msg.sender == instructor, "Only instructor can invoke this function");
        enabled= true;
    }
    function disable() public {
        require(msg.sender == instructor, "Only instructor can invoke this function");
        enabled= false;
    }
    function give_attendance(uint _id) public {
        bool multiple_attendance=false;
        for (uint i = 0; i< attendee_list.length-1; i++){
            if(attendee_list[i]==msg.sender){
                multiple_attendance=true;
            }
        }
        if(enabled==true){
            require(multiple_attendance == false, "Cannot give attendance anymore");
            attendance_record.push(_id);
            attendee_list.push(msg.sender);
        } else {

        }
    }
    function check_attendance() public view returns(uint){
        for (uint i = 0; i< attendee_list.length-1; i++){
            if(attendee_list[i]==msg.sender){
                return attendance_record[i]; 
            }
        }
        return 1;
    } 
    function check_attendance2(uint _id) public view returns(bool){
        require(msg.sender == instructor, "Only instructor can invoke this function");
        for (uint i = 0; i< attendance_record.length-1; i++){
            if(attendance_record[i]==_id){
                return true;
            }
        }
        return false;
    }

    function total_attendance() public view returns(uint){
        return attendance_record.length;
    }

}