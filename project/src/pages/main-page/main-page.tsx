import { useState } from 'react';
import CityList from '../../components/cities-list/cities-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import { OffersProps } from '../../types/offers';

type MainPageProps = OffersProps & { city: string };

function MainPage(props: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(null as number | null);
  const { city, offers } = props;
  const cityLocation = offers[0].city.location;
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const points = sortedByCityOffers.map(({ id, location }) => ({ id, location }));
  const advertsAmount = sortedByCityOffers.length;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="#header__logo">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#header__nav-link">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList city={city} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{advertsAmount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#-some-valid-path" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlaceCardList setActiveOffer={setActiveOffer} offers={sortedByCityOffers} placeCardListType="main" />
            </section>
            <div className="cities__right-section">
              <Map city={cityLocation} points={points} selectedPoint={activeOffer} type="main" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
