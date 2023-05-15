import { PageContainer } from '@components/Layout/PageContainer';
import styled from 'styled-components';

import GreyFolderImage from '@assets/images/grey-folder.png';
import YellowFolderImage from '@assets/images/yellow-folder.png';
import Butterfly from '@assets/images/Unionbutterfly.png';

export const MainPage = () => {
  return (
    <PageContainer header>
      <Banner>
        <BannerTitle>내 지원서 보관함</BannerTitle>
        <BannerDescription>지원서 관리를 한 곳에서</BannerDescription>
        <UnionButterfly src={Butterfly} alt="butterfly" />
      </Banner>
      <FolderContainer>
        <Folder src={GreyFolderImage} alt="yellow-folder-img" />
        <Folder src={YellowFolderImage} alt="grey-folder-img" />
      </FolderContainer>
    </PageContainer>
  );
};

const Banner = styled.div`
  width: 100%;
  height: 150px;
`;
const BannerTitle = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  padding-top: 30px;
  padding-left: 348px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.grey3};
`;

const BannerDescription = styled.div`
  font-family: 'HappinessSansBold', sans-serif;
  padding-top: 20px;
  padding-left: 348px;
  font-size: 48px;
  color: ${(props) => props.theme.colors.wht};
`;

const FolderContainer = styled.div`
  padding-left: 348px;
  padding-top: 50px;
`;

const Folder = styled.img`
  width: 250px;
  height: 200px;
  padding-right: 20px;
`;
const UnionButterfly = styled.img`
  padding-left: 1100px;
`;
