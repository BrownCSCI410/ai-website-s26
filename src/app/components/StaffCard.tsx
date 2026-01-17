import React from 'react';
import ReactFlipCard from 'reactjs-flip-card'
import Image, { StaticImageData } from 'next/image';

type FlipCardProps = {
    photoPath: StaticImageData
    clashRoyaleImagePath: StaticImageData;
}

type StaffCardProps = {
    name: string;
    cslogin?: string;
    pronouns: string;
    blurb: string;
    favCharacter?: string;
    photoPath: StaticImageData;
    hometown: string;
    clashRoyaleImagePath: StaticImageData;
}

export class FlipCard extends React.Component<FlipCardProps> {
  render() {
    const styles = {
      card: {
        width: '300px',
        height: '300px',
        margin: '12.5px',
        borderRadius: '10px'
      },
      frontImage: {
          width: '300px',
          height: '300px',
          borderRadius: '10px'

      },
      backImage: {
        width: '300px',
        height: '300px',
        backgroundColor: 'rgb(31, 44, 74)',
        borderRadius: '10px'

      },
    };

    return (
      <div className="card-staff">
        <ReactFlipCard
          containerStyle={styles.card}
          frontComponent={<Image src={this.props.photoPath} alt="Staff"/>}
          backComponent={<Image src={this.props.clashRoyaleImagePath} alt="Clash Royale Card"/>}
        />
      </div>
    );
  }
}

export function StaffCard(props: StaffCardProps) {
    return (
        <div className="border border-white/10 bg-blue-900/60 backdrop-blur-sm rounded-[26px] pt-0 pb-5 px-5">
            <FlipCard photoPath={props.photoPath} clashRoyaleImagePath={props.clashRoyaleImagePath}/>
            <br/>
            <br/>
            <br/>
            <div className="max-w-xs border border-white/10 bg-black/40 rounded-[20px] p-3">
                <p className="staff-name text-2xl font-bold">{props.name}</p>
                <p className="pronouns">{props.pronouns}</p>
                <br/>
                <p className="text-sm">{props.blurb}</p>
                <br/>
                <p className="text-sm">Hometown: {props.hometown}</p>
            </div>
        </div>
    );
}

export function ProfCard(props: StaffCardProps) {
    return (
        <div className="min-h-[815px] border border-white/10 bg-blue-900/60 backdrop-blur-sm rounded-[26px] pt-0 pb-5 px-5">
            <FlipCard photoPath={props.photoPath} clashRoyaleImagePath={props.clashRoyaleImagePath}/>
            <br/>
            <br/>
            <br/>
            <div className="max-w-xs border border-white/10 bg-black/40 rounded-[20px] p-3">
                <p className="staff-name text-2xl font-bold">{props.name}</p>
                <p className="pronouns">{props.pronouns}</p>
                <br/>
                <p className="text-sm">{props.blurb}</p>
                <br/>
                <p className="text-sm">Hometown: {props.hometown}</p>
            </div>
        </div>
    );
}

export function HTACard(props: StaffCardProps) {
    return (
        <div className="min-h-[675px] border border-white/10 bg-blue-900/60 backdrop-blur-sm rounded-[26px] pt-0 pb-5 px-5">
            <FlipCard photoPath={props.photoPath} clashRoyaleImagePath={props.clashRoyaleImagePath}/>
            <br/>
            <br/>
            <br/>
            <div className="max-w-xs border border-white/10 bg-black/40 rounded-[20px] p-3">
                <p className="staff-name text-2xl font-bold">{props.name}</p>
                <p className="pronouns">{props.pronouns}</p>
                <br/>
                <p className="text-sm">{props.blurb}</p>
                <br/>
                <p className="text-sm">Hometown: {props.hometown}</p>
            </div>
        </div>
    );
}
