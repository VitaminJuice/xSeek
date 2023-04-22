import React, { useState, useEffect } from 'react';
import SearchIcon from 'assets/img/search.svg';
import DocumentText from 'assets/img/document-text.svg';
import FilterIcon from 'assets/img/filter.svg';
import CubeTransparent from 'assets/img/cube-transparent.svg';
import CameraIcon from 'assets/img/camera.svg';
import CloseButtonBlack from 'assets/img/close-black.svg';
import DownloadIcon from 'assets/img/document-download.svg';
import ArrowIconRed from 'assets/img/arrow-circle-red.svg';
import ArrowIconGreen from 'assets/img/arrow-circle-green.svg';
import StatusBarGreen from 'assets/img/bargreen.svg';
import StatusBarRed from 'assets/img/barred.svg';
import { FilterBar } from 'components/FilterBar';
import './index.scss';

export const MainFunction = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [openCreateImage, setOpenCreateImage] = useState(false);
  const [openSelectedImage, setOpenSelectedImage] = useState(false);

  const handleOpenFilter = () => {
    setFilterOpened(true);
  };

  const handleCloseCreateImage = () => {
    setOpenCreateImage(false);
  };

  const handleCloseSelectedImage = () => {
    setOpenSelectedImage(false);
  };

  return (
    <div className='xseek-erd'>
      {/* <div className='top-text'>
        <b>Enter an ERD</b>
        Utilize xSeek to privately back check an ERD address, to learn more
        about transfers, values, and numbers.
      </div>
      <div className='type-box'>
        <div className='type-box-text'>Enter account address here...</div>
      </div>
      <div className='search-button'>
        <div className='search-button-text'>Search</div>
        <img src={SearchIcon} />
      </div>
      <div className='main-box row'>
        <div className='main-box-single col-sm-12 col-md-12 col-lg-4 col-xl-4'>
          <div className='subtitle'>
            <img src={CubeTransparent} />
            Account Details
          </div>
          <div className='text'>
            Double-click on the searched squared centered icon to see all
            transfers and volumes associated with that address.
          </div>
        </div>
        <div className='main-box-single col-sm-12 col-md-12 col-lg-4 col-xl-4'>
          <div className='subtitle'>
            <img src={FilterIcon} />
            Filters
          </div>
          <div className='text'>
            You can focus your search to discover relevant transfers by using
            various filtering variables.
          </div>
        </div>
        <div className='main-box-single col-sm-12 col-md-12 col-lg-4 col-xl-4'>
          <div className='subtitle'>
            <img src={DocumentText} />
            Transfer Details
          </div>
          <div className='text'>
            To see all the transfers connected to a node or a line, jsut click
            on them once.
          </div>
        </div>
      </div> */}
      {filterOpened ? (
        <FilterBar setFilterOpened={setFilterOpened} />
      ) : (
        <div className='not-opened-filter' onClick={handleOpenFilter}>
          <img src={FilterIcon} />
        </div>
      )}

      <div
        className='create-image-button'
        onClick={() => setOpenCreateImage(true)}
      >
        <div className='create-image-text'>Generate image</div>
        <img src={CameraIcon} />
      </div>

      <div
        className={`create-image-container ${openCreateImage ? 'active' : ''}`}
      >
        <div className='transaction-container'>
          <div className='transaction-history'>
            <img src={CloseButtonBlack} onClick={handleCloseCreateImage} />
          </div>
          <div className='download-container'>
            <div className='download-image-text'>Download</div>
            <img src={DownloadIcon} />
          </div>
        </div>
      </div>
      <div
        className='selected-image-button'
        onClick={() => setOpenSelectedImage(true)}
      >
        <div className='selected-image-text'>Selected Node</div>
      </div>
      <div
        className={`selected-image-container ${
          openSelectedImage ? 'active' : ''
        }`}
      >
        <div className='selected-node-dialog'>
          <div className='main-side'>
            <div className='main-side-header'>
              <div className='main-side-header-text-title'>Selected Node:</div>
              <div className='main-side-header-text-content'>
                erd1f330mdg9qwxa9q2dsawk6qjmfrhr3kyzeamqm7d0m5phc64qn5pquuv8up
              </div>
              <img src={CloseButtonBlack} onClick={handleCloseSelectedImage} />
            </div>
            <div className='main-content'>
              <div className='transaction-three-items'>
                <div className='three-items-single-box'>
                  <div className='single-box-text'>Acumulated</div>
                </div>
                <div className='three-items-single-box'>
                  <div className='single-box-text'>Single Transfers</div>
                </div>
                <div className='three-items-single-box'>
                  <div className='single-box-text'>NFTs</div>
                </div>
              </div>
              <div className='transaction-single-box'>
                <div className='text-icon'>
                  <div className='text'>
                    <div className='title'>131 EGLD</div>
                    <div className='single-content-text'>
                      Received from:
                      erd1rt2788zkphpcmp8xjevxg7m7drqmzh55zl8c0wghh53xsxmv9f0q6a9qt5
                    </div>
                    <div className='single-content-text'>
                      Txn Hash:
                      37e2279ae23f115a6508a1992eef6929a0e1f757d7377307b75bfcbb10237aec
                    </div>
                    <div className='single-content-text'>
                      Age: 2 days 23 hrs (Apr 08, 2023 18:50:42 UTC)
                    </div>
                  </div>
                  <img src={ArrowIconGreen} />
                </div>
                <img src={StatusBarGreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
