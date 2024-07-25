import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
function NewAd() {

    function createHandleMenuClick(option) {
        console.log(option);
    }
    return (
        <div>
            <div>

                <h1>New-Ad</h1>
            </div>

            <div>
                <form>
                    <div>
                        <p>
                            Ad title
                        </p>

                        <input type="text" name="AdTitle" id="AdTitle" className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                    </div>

                    <div>
                        <p>
                            Ad description
                        </p>

                        <input type="text" name="AdDescription" id="AdDescription" className=" w-full text-base rounded-xl border-[2px] border-slate-200 bg-white h-14 px-2" />
                    </div>

                    <div>
                        <p>
                            Ad Theme
                        </p>
                        <Dropdown>
                            <MenuButton>My account</MenuButton>
                            <Menu>
                                <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
                                <MenuItem onClick={createHandleMenuClick('Language settings')}>
                                    Language settings
                                </MenuItem>
                                <MenuItem onClick={createHandleMenuClick('Log out')}>Log out</MenuItem>
                            </Menu>
                        </Dropdown>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewAd;