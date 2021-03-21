import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import 'reactjs-popup/dist/index.css';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const HowTo = ()=>{
    const classes = useStyles();
    return(
        
        <Popup
          trigger={<Button variant="contained" color="primary" >
          How To
        </Button>}
          modal
          nested
          
        >
          {close => (
            <div className="modal">
                
              <Button variant="contained" color="primary"  onClick={close}>
                &times;
              </Button>
              <div className="header"> Categories </div>
              <div className="content">
               This has all the info about what you are about to enter. Click each button below to learn more
              </div>
              <div className="actions">
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary"> Tournament Name </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                  This can be anything from "Daily 12:30 tournament" to "World Series of Poker Event 9". If it is a tournament that happens daily please just say something like "Daily 12:30 tournament" and we can add which days in later so you do not have to do one for each day
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Time </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   What time the tournament starts
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                
                <Popup
                  trigger={<Button variant="contained" color="primary" > Starting Chips </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   The amount of starting chips. DO NOT add any add on or dealer appreciation amount, that will be added later
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Round Length </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   How long each level is, usually 15 minutes, 20 minutes, or 30
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Buy In Amount </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   Just the buyin amount without any addons or anything, usually in the name of the tournament
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Deductions </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   How much money the casino takes out of each buyin. This usually can be found pokeratlas. Will be called either deductions or fees
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Guarantee </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   Guaranteed prize pool by the casino. Not every tournament has these and in that case leave it at 0
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Break Frequency </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   How often breaks happen, as in levels
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Break Length </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   How long does the breaks last
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Late Registration </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   Until what level can someone buy into the tournament
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Link To Document </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   Web address to the document you are looking at that gives the information about blind amount per level, usually in PDF format
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Occurrence </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   How often the tournament happens. If it happens more than once a week select "daily" then choose the days from there. 
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Ante Type </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                   Traditional tournaments had everyone posting a ante once antes started, but a recent thing is tournaments are having only 1 player post an ante, usually the big blind or dealer button
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Rebuy </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                  If the tournament has rebuys, and if so until what level. A rebuy is when a player runs out of chips and can buy in again and keep the same seat, different from a re-entry
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Re-Entry </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                  If the tournament has re-entries, and if so until what level.  A re-entry is when a player runs out of chips and can buy in again but is basically a new player, meaning they get a different seat as if they just walked up and bought in. Different from a re-entry
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Bounties </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                  If the tournament has bounties, and if so how much. Bounties are where if player A knocks out player B, player A gets player B's bounty, usually a portion of the buyin.
                  </span>
                </Popup>
                </span>
                <span className={classes.root}>
                <Popup
                  trigger={<Button variant="contained" color="primary" > Add Ons </Button>}
                  position={['top center', 'bottom right', 'bottom left']}
                  nested
                >
                  <span>
                 Add ons are any chips a player can buy when they are not out of chips. Tournaments usually do this is 2 ways, one that happens at the beginning (sometimes called "dealer appreciation") where the player can pay an extra money before they play and get more chips, then that money could go straight to the dealers. The other is an add on when a player is under a certain amount and they can buy more chips.
                 <p>
                     For both types there is usually a level where add ons are not allowed anymore, plus the amount received, and how much money it cost. If the add on does not happen at the beginning of the tournament choose "other" and make a small note, for example "Can add on anytime a player is under 10,000 chips"
                 </p>
                 
                  </span>
                </Popup>
                </span>
                {/* <Button
                 variant="contained" color="primary"
                  onClick={() => {
                    console.log('modal closed ');
                    close();
                  }}
                >
                  Close
                </Button> */}
              </div>
            </div>
          )}
        </Popup>
      
    )
    
}
export default HowTo
