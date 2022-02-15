import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../styles/SideBar.css'
function SideBar() {
  const history = useNavigate();
  const location = useLocation();
    return (
      <div className="wrapper">
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              history(itemId);
            }}
            items={[
              {
                title: 'Dashboard',
                itemId: '/dashboard',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Management',
                itemId: '/management',
                elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Clients',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: 'Projects',
                itemId: '/projects',
                elemBefore: () => <Icon name="radio" />,
                subNav: [
                  {
                    title: 'UBS',
                    itemId: '/ubsPage',
                  },
                  {
                    title: 'Astrid',
                    itemId: '/astrid',
                  },
                  {
                    title: 'Itivity',
                    itemId: '/Projects/Itivity',
                  },
                  {
                    title: 'Project XYZ',
                    itemId: '/Projects/Project XYZ',
                  }
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
      </div>
    );
}

export default SideBar;