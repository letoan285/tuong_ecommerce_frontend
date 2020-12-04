import React from 'react';
import ItemsCarousel from 'react-items-carousel';

const ITemCarousel = () => {
  return (
    <div style={{ "padding": "0 60px", "maxWidth": 1000, "margin": "0 auto" }}>
  <ItemsCarousel
    placeholderItem={<div style={{ height: 200, background: '#EEE' }} />}
    enablePlaceholder={true}
    numberOfPlaceholderItems={3}
    numberOfCars={3}
    gutter={12}
    slidesToScroll={2}
    chevronWidth={60}
    outsideChevron={true}
    showSlither={false}
    firstAndLastGutter={false}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={'>'}
    leftChevron={'<'}
  >
    {isDataFetching ? [] : Array.from(new Array(8)).map((_, i) =>
      <div
        key={i}
        style={{
          height: 200,
          background: 'url(https://placeimg.com/380/200/nature)'
        }}
      />
    )}
  </ItemsCarousel>
</div>
  );
}

export default ITemCarousel;