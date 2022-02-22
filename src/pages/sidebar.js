import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import Cookies from 'js-cookie';

import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div style={{ display: 'flex', position: 'fixed', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#191c25">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-small"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Dashboard
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/students" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Student Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/departments" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Department Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/instructors" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Instructors Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/advisors" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Advisors Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/prerequisites" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Pre-Requisites for Courses</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/classrooms" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Classroom Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/timeslots" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Time Slot Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/sections" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>Section Detail</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked" onClick={()=>{
                            Cookies.remove('user');
                            window.location.href = '/';
                        }}>
                            <CDBSidebarMenuItem>Log Out</CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};