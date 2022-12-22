import { useSelector } from "react-redux";
import {
    AccountBody,
    AccountContent,
    AccountHeader,
    AccountNav,
    AccountWrapper,
} from "../features/account/account.styled";
import { getUser } from "../features/auth/auth.slice";
import { Link } from "react-router-dom";
import { FiCreditCard, FiSettings, FiUser } from "react-icons/fi";

const AccountPage = () => {
    const user = useSelector(getUser);
    console.log(user);

    return (
        <AccountWrapper>
            <div className="container">
                <AccountHeader>
                    <div className="flex-column">
                        <h3>Hamza Kamran</h3>
                        <p>Manager Account</p>
                    </div>
                    <Link to="editor" className="btn">
                        Go to menu editor
                    </Link>
                </AccountHeader>
                <AccountBody>
                    <AccountNav>
                        <ul>
                            <li>
                                <Link>
                                    <FiUser />
                                    <p>Profile</p>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FiSettings />
                                    <p>Account Settings</p>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <p className="sm">Access</p>
                            <li>
                                <Link>
                                    <FiCreditCard />
                                    <p>Billing</p>
                                </Link>
                            </li>
                        </ul>
                    </AccountNav>
                    <AccountContent>
                        <div className="contentSection">
                            <h2>Profile</h2>
                            <form>
                                <section>
                                    <label>Restaurant Name</label>
                                    <input type="text" />
                                    <div className="note">
                                        Name of your restaurant/franchise.
                                    </div>
                                </section>
                                <section>
                                    <label>Bio</label>
                                    <textarea></textarea>
                                    <div className="note">
                                        Tell a little about your restaurant.
                                    </div>
                                </section>
                                <section>
                                    <label>URL</label>
                                    <input type="text" />
                                    <div className="note">
                                        Provide a URL for people to find your
                                        website. Ex. "test-restaurant" would
                                        become www.munchable.io/test-restaurant
                                    </div>
                                </section>
                                <section>
                                    <label>Instagram Username</label>
                                    <input type="text" />
                                </section>
                                <section>
                                    <button type="submit">
                                        Update Profile
                                    </button>
                                </section>
                            </form>
                        </div>
                    </AccountContent>
                </AccountBody>
            </div>
        </AccountWrapper>
    );
};

export default AccountPage;
