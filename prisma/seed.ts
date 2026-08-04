import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Restoring recovered database records...');

  // 1. Clean existing tables
  await prisma.setlistSong.deleteMany({});
  await prisma.setlist.deleteMany({});
  await prisma.song.deleteMany({});
  await prisma.transaction.deleteMany({});
  await prisma.roadmapItem.deleteMany({});

  // 2. Insert Songs
  const songs = [
    { id: '6825bfc5-2edf-49f2-8c35-6b9af594107a', title: 'Rhiannon', isCover: true, originalArtist: 'Fleetwood Mac' },
    { id: 'c0cffa5c-4afc-4cb3-bdb2-fa68ab65f457', title: 'Weir', isCover: true, originalArtist: 'Killing Heidi' },
    { id: '326ce87d-ed7d-48a9-a3ce-bce08627e0cb', title: 'Eagle Rock', isCover: true, originalArtist: 'Daddy Cool' },
    { id: '44c373e0-1067-4c84-a16f-b968e5ebed70', title: "Don't Change", isCover: true, originalArtist: 'Grinspoon' },
    { id: '863386a2-00e6-4283-8b1a-25f2b78eb890', title: 'Down To The Waterline', isCover: true, originalArtist: 'Dire Straits' },
    { id: '5918268b-27e8-417c-873f-15c3a6b5bb65', title: 'Sultans Of Swing', isCover: true, originalArtist: 'Dire Straits' },
    { id: 'e707d29f-3db9-4ebb-97c3-b7f6ff6c001e', title: 'Jeep On 35', isCover: true, originalArtist: 'John Scofield' },
    { id: 'ab2a62fc-098c-4dd2-a1df-ab97f3eaf8d1', title: 'Layla', isCover: true, originalArtist: 'Eric Clapton' },
    { id: '94b62e10-2c0c-41c4-9e03-d738a2d4e83c', title: 'Green Eyes', isCover: true, originalArtist: 'Coldplay' },
    { id: 'b419a68a-7316-445d-9945-b55543359ebe', title: 'Rosanna', isCover: true, originalArtist: 'Toto' },
    { id: '0b93db36-be51-47b6-bea3-10f02969ab6f', title: 'Black Hole Sun', isCover: true, originalArtist: 'Soundgarden' },
    { id: '26f8285b-e3be-4194-a80e-7745fa659ae7', title: "Ain't Nobody", isCover: true, originalArtist: 'Chaka Khan' },
    { id: '45be695e-d0f1-45d2-af43-a92a3621cb13', title: "Don't Dream It's Over", isCover: true, originalArtist: 'Crowded House' },
    { id: '0210c0dd-a471-42bf-8514-9bfc84218273', title: 'Come Together', isCover: true, originalArtist: 'The Beatles' },
    { id: '364a301e-a078-4d66-bcae-ad2e5bbbe369', title: 'Shakey Ground', isCover: true, originalArtist: 'The Temptations' },
    { id: 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', title: 'Superstition', isCover: true, originalArtist: 'Stevie Wonder / Jeff Beck' },
    { id: '5089ce04-e632-4ffc-8285-8d93ca932034', title: 'The Chain', isCover: true, originalArtist: 'Fleetwood Mac' },
    { id: '5d289aad-a57e-4251-a23a-63a77f91d7bc', title: 'Silver Springs', isCover: true, originalArtist: 'Fleetwood Mac' },
    { id: 'a1b63e96-b47b-4220-b9d3-16c185901601', title: 'Red House', isCover: true, originalArtist: 'Jimi Hendrix' },
    { id: 'e34d488e-afd8-4b50-b85b-0154d972982a', title: 'Purple Haze', isCover: true, originalArtist: 'Jimi Hendrix' },
    { id: 'dd7b8698-4284-4ee0-aa87-4f1e1f68fc54', title: 'Dazed And Confused', isCover: true, originalArtist: 'Led Zeppelin' },
    { id: '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', title: 'Are You Gonna Be My Girl', isCover: true, originalArtist: 'Jet' },
    { id: '04f5f2d5-7650-47c1-90d8-8d9e714497fa', title: 'Just A Girl', isCover: true, originalArtist: 'No Doubt' },
    { id: 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', title: 'Hotel California', isCover: true, originalArtist: 'The Eagles' },
    { id: 'bf8aca0d-a443-4669-928d-740f2fe13f34', title: 'Black Magic Woman', isCover: true, originalArtist: 'Santana' },
    { id: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', title: 'Help Me', isCover: false, originalArtist: null },
    { id: '44153508-c7f5-4027-bb88-42ccdc65a1ec', title: 'Hatman', isCover: false, originalArtist: null },
    { id: '89192951-7ff5-4c55-a433-74e39bf27501', title: 'Apples', isCover: false, originalArtist: null },
    { id: 'acd92256-9bf8-4f2e-bcc0-717a45800842', title: 'Whole Lotta Love', isCover: true, originalArtist: 'Led Zeppelin' },
  ];

  await prisma.song.createMany({ data: songs });
  console.log(`Inserted ${songs.length} songs.`);

  // 3. Insert Setlists
  const setlists = [
    { id: '3f6febb6-779d-44f4-bf03-c0702edc9de9', venue: 'South Street Ale House', notes: 'First Gig!', goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-01-10T20:00:00.000Z') },
    { id: '26c06a9f-af9c-4e73-a11c-e4defdb7f36d', venue: 'South Street Ale House', notes: null, goodNotes: null, badNotes: "Tone for Ain't Nobody was very trebly", interestingNotes: null, date: new Date('2024-01-17T20:00:00.000Z') },
    { id: '80f38b1b-d185-4e57-a465-1f1b9021977d', venue: 'Taya Engagement Party', notes: null, goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-01-24T20:00:00.000Z') },
    { id: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', venue: 'Zeke Engagement Party', notes: null, goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-02-01T20:00:00.000Z') },
    { id: '4122448f-b7c4-409c-b4fc-f1435a07ac7b', venue: 'Birthday', notes: null, goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-02-08T20:00:00.000Z') },
    { id: '4ef1d1c2-b654-4460-b08c-d807389588de', venue: 'SWA Party', notes: null, goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-02-15T20:00:00.000Z') },
    { id: '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', venue: 'Indi Bar', notes: 'Sunday Sesh', goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-02-22T20:00:00.000Z') },
    { id: 'f8e1d468-226f-49a4-9088-78bccfd0e613', venue: 'Sea Shepherd', notes: null, goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-03-01T20:00:00.000Z') },
    { id: '9b5c0f4c-a973-4788-9415-27b430c23c31', venue: 'Indi Bar', notes: 'Sunday Sesh', goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-03-08T20:00:00.000Z') },
    { id: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', venue: 'Madi Birthday', notes: null, goodNotes: null, badNotes: null, interestingNotes: 'Idk the order of these', date: new Date('2024-03-15T20:00:00.000Z') },
    { id: 'c7fda64d-1570-42bb-ad08-773e24127d6d', venue: 'Indi Bar', notes: 'Plug and Play', goodNotes: null, badNotes: null, interestingNotes: null, date: new Date('2024-03-22T20:00:00.000Z') },
    { id: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', venue: 'Indi Bar', notes: 'Plug and Play', goodNotes: "Crowd absolutely loved it\nBest gig we've played so far", badNotes: 'Ryan stepped on his cable lol', interestingNotes: null, date: new Date('2024-03-29T20:00:00.000Z') },
    { id: 'e009b525-5063-4e68-8fa7-22987a262f21', venue: 'Milk Bar', notes: null, goodNotes: 'Great turnout for a venue in the middle of nowhere', badNotes: "Crowd less engaged than usual\nDidn't sound too cohesive", interestingNotes: null, date: new Date('2024-04-05T20:00:00.000Z') },
    { id: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', venue: 'The Bird', notes: 'Supporting the Goddamn Darlings', goodNotes: 'Crowd of new people enjoyed', badNotes: "Need to move more!!!!!!!\nRyan arrived way to close to 7:30 and didn't give us enough heads up about it", interestingNotes: null, date: new Date('2024-04-12T20:00:00.000Z') },
    { id: '92f3e4af-5297-4d91-9ccd-9106f822f9da', venue: 'Indi Bar', notes: 'Toy Crown Single Launch', goodNotes: 'Help me was awesome\nCrowd energy was great by the end\nComplements on good cover choices\nComplements on 2 guitars playing together', badNotes: "Zeke couldn't get the reverb lmao\nLong time between songs\nMissed entrance to second chorus silver springs\nTobias solos were poor", interestingNotes: null, date: new Date('2024-04-19T20:00:00.000Z') },
    { id: 'b691aa43-68a1-44ce-947d-401c21b674c4', venue: 'Indi Bar', notes: 'Hello Stranger', goodNotes: 'Sold out!!!!\nAmazing energy\nIncredible drum fills\nVery well done', badNotes: 'Missed second half of second solo in black magic woman but caught it perfectly', interestingNotes: null, date: new Date('2024-04-26T20:00:00.000Z') },
  ];

  await prisma.setlist.createMany({ data: setlists });
  console.log(`Inserted ${setlists.length} setlists.`);

  // 4. Insert SetlistSongs
  const setlistSongs = [
    { id: '14c3e4ab-420e-404f-90a9-ebfa4104ace2', setlistId: '3f6febb6-779d-44f4-bf03-c0702edc9de9', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: 'b65ded6d-1013-4e45-bcae-4f408d42b811', setlistId: '3f6febb6-779d-44f4-bf03-c0702edc9de9', songId: '5d289aad-a57e-4251-a23a-63a77f91d7bc', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'acf74905-3b08-46ad-bccc-f5de2f36c7e5', setlistId: '3f6febb6-779d-44f4-bf03-c0702edc9de9', songId: '45be695e-d0f1-45d2-af43-a92a3621cb13', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: 'd93ca2ab-7751-48e4-b0d4-0bd650cc0ca8', setlistId: '3f6febb6-779d-44f4-bf03-c0702edc9de9', songId: 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', position: 4, isOpener: false, isCloser: true, feedback: null },
    { id: '68179487-646b-476f-a7fb-bf8735bda08c', setlistId: '26c06a9f-af9c-4e73-a11c-e4defdb7f36d', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: '2477ae4b-ecb6-4b25-aa06-9a399a7a9a9b', setlistId: '26c06a9f-af9c-4e73-a11c-e4defdb7f36d', songId: 'e34d488e-afd8-4b50-b85b-0154d972982a', position: 2, isOpener: false, isCloser: true, feedback: null },
    { id: 'e0976e71-454d-4ad9-bbc8-0a4005a5e581', setlistId: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', songId: '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: '17be7075-8d37-405d-bcf2-7879077a2595', setlistId: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: '6d281d98-22ce-43ba-84fc-f207b3e909c3', setlistId: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', songId: '5d289aad-a57e-4251-a23a-63a77f91d7bc', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: '8bf92967-ab81-4a97-bc82-ab79da5b17e3', setlistId: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 4, isOpener: false, isCloser: false, feedback: null },
    { id: 'a61b49f4-67e5-4a83-a18e-4323d9f5dc9e', setlistId: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', songId: '04f5f2d5-7650-47c1-90d8-8d9e714497fa', position: 5, isOpener: false, isCloser: false, feedback: null },
    { id: '6adb483e-7953-4072-95b8-f781099ae7bc', setlistId: '7ec87dcd-2053-49a3-84de-8e6f99813dd3', songId: '863386a2-00e6-4283-8b1a-25f2b78eb890', position: 6, isOpener: false, isCloser: true, feedback: null },
    { id: 'c01521be-4968-4e0a-b678-5a17800f8c1f', setlistId: '4122448f-b7c4-409c-b4fc-f1435a07ac7b', songId: '04f5f2d5-7650-47c1-90d8-8d9e714497fa', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: '6de3f472-01f1-460d-b580-e1de77a13484', setlistId: '4122448f-b7c4-409c-b4fc-f1435a07ac7b', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'c9c63b66-4da0-4af1-8817-a72f4fdb09ba', setlistId: '4122448f-b7c4-409c-b4fc-f1435a07ac7b', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 3, isOpener: false, isCloser: true, feedback: null },
    { id: '41dde199-60ea-4ca1-a232-7f60c6ff6317', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: 'e34d488e-afd8-4b50-b85b-0154d972982a', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: '73b9867f-0759-4b28-968e-12cddb7961aa', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: '0e08ad43-0cb7-4ffc-8f59-ee97868090a9', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: 'acd92256-9bf8-4f2e-bcc0-717a45800842', position: 3, isOpener: false, isCloser: false, feedback: 'Incredible performance of this, especially Taya' },
    { id: 'dbd945d9-111b-4a51-b699-5414ab3de7f5', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 4, isOpener: false, isCloser: false, feedback: 'We lost the crowd here' },
    { id: '6e6f9a9b-588d-4d8f-9953-e3924db8cd76', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 5, isOpener: false, isCloser: false, feedback: null },
    { id: 'fc20b782-4901-4756-95da-df38d6ec4b97', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: '5d289aad-a57e-4251-a23a-63a77f91d7bc', position: 6, isOpener: false, isCloser: false, feedback: null },
    { id: '13d8a9d4-4946-4b57-bffc-8c52fa860445', setlistId: '4ef1d1c2-b654-4460-b08c-d807389588de', songId: '04f5f2d5-7650-47c1-90d8-8d9e714497fa', position: 7, isOpener: false, isCloser: true, feedback: null },
    { id: '46d9a4b5-6ffb-4eba-b0b4-515a80544a4a', setlistId: '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: 'dc8f94ba-2764-4ddd-b4ac-d8e4a0c5e501', setlistId: '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'ff487f34-0502-4b74-a402-3de1acd4b4d4', setlistId: '5784a6b4-f2c6-4fb9-b7b1-6c7024c6cee1', songId: 'acd92256-9bf8-4f2e-bcc0-717a45800842', position: 3, isOpener: false, isCloser: true, feedback: null },
    { id: '4e7c218e-b66d-46c7-a6ee-a15b3aaddb09', setlistId: 'f8e1d468-226f-49a4-9088-78bccfd0e613', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: 'e8d5a5d7-3612-49b8-a630-33324fe68aa4', setlistId: 'f8e1d468-226f-49a4-9088-78bccfd0e613', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'b6dcf63c-abbc-4bb7-86ca-fd18209d345a', setlistId: 'f8e1d468-226f-49a4-9088-78bccfd0e613', songId: 'bf8aca0d-a443-4669-928d-740f2fe13f34', position: 3, isOpener: false, isCloser: true, feedback: null },
    { id: '5ab514e3-145c-4477-a583-e34ee2785e2d', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: '863386a2-00e6-4283-8b1a-25f2b78eb890', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: 'b35d9c73-0ac3-48d8-a95d-fc8fdcd9e6c8', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: '66e6dea7-eb6b-4924-be11-64fd3a62c475', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: 'bf8aca0d-a443-4669-928d-740f2fe13f34', position: 3, isOpener: false, isCloser: false, feedback: 'Messed this up a fair bit, but it was our first time playing' },
    { id: '0bb34710-d4ce-4bd0-9f96-a0d7bb4c588d', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', position: 4, isOpener: false, isCloser: false, feedback: null },
    { id: 'a4147dac-2a2b-4d0e-8a7e-3070eb3068da', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: 'acd92256-9bf8-4f2e-bcc0-717a45800842', position: 5, isOpener: false, isCloser: false, feedback: null },
    { id: '2a9b7e0a-83be-40bb-ab98-89006b27013a', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: '5089ce04-e632-4ffc-8285-8d93ca932034', position: 6, isOpener: false, isCloser: false, feedback: null },
    { id: '781a23bd-7e05-4046-9c74-52ca630ff245', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 7, isOpener: false, isCloser: false, feedback: null },
    { id: '0c15d7eb-1f4d-4d8f-942d-b98b0e5123c7', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: 'e707d29f-3db9-4ebb-97c3-b7f6ff6c001e', position: 8, isOpener: false, isCloser: false, feedback: null },
    { id: '5e605a4a-4a48-4090-891e-d56d6fe9e2e3', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 9, isOpener: false, isCloser: false, feedback: null },
    { id: '31d712dc-9c5b-4a7c-8225-a43f3347527b', setlistId: '78af7be8-0a18-4e65-95a5-ff9e1e26d207', songId: '26f8285b-e3be-4194-a80e-7745fa659ae7', position: 10, isOpener: false, isCloser: true, feedback: null },
    { id: '8534c2ec-3718-4c89-af0b-59e8f1c7fcd8', setlistId: 'c7fda64d-1570-42bb-ad08-773e24127d6d', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: '3b99a481-2eb7-406d-8c75-dc8b048210cd', setlistId: 'c7fda64d-1570-42bb-ad08-773e24127d6d', songId: 'ab2a62fc-098c-4dd2-a1df-ab97f3eaf8d1', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: '805904d0-9ef4-4f0f-975a-7fc303ad106a', setlistId: 'c7fda64d-1570-42bb-ad08-773e24127d6d', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: '7df4890a-0976-4ddb-8dee-c014b958a8f2', setlistId: 'c7fda64d-1570-42bb-ad08-773e24127d6d', songId: 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', position: 4, isOpener: false, isCloser: false, feedback: null },
    { id: '4db6d411-eac4-4070-8326-c1e388737190', setlistId: 'c7fda64d-1570-42bb-ad08-773e24127d6d', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 5, isOpener: false, isCloser: false, feedback: null },
    { id: 'e02e884d-b9c4-4e5a-8969-f64cf96d2020', setlistId: 'c7fda64d-1570-42bb-ad08-773e24127d6d', songId: 'acd92256-9bf8-4f2e-bcc0-717a45800842', position: 6, isOpener: false, isCloser: true, feedback: null },
    { id: '2822f430-4c0b-47ac-bade-6fa51fe19e39', setlistId: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', songId: 'bf8aca0d-a443-4669-928d-740f2fe13f34', position: 1, isOpener: true, isCloser: false, feedback: 'Wonderful opening song' },
    { id: '43961f84-9a09-4a91-a094-5e2e733410d4', setlistId: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'ab2522c3-ddf7-4ab1-869b-919f29b8e4f0', setlistId: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', songId: 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: '255c205d-3aa6-4413-956c-667b800411f3', setlistId: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 4, isOpener: false, isCloser: false, feedback: null },
    { id: '06c04e5e-1639-438c-8eac-26863baa98f2', setlistId: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 5, isOpener: false, isCloser: false, feedback: null },
    { id: '7dc417ad-a811-4824-85e8-37d3d2ffa9b2', setlistId: 'cb696c6f-0d49-470e-a4b0-0aec36e4b2eb', songId: '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', position: 6, isOpener: false, isCloser: true, feedback: 'Crowd was calling for an encore' },
    { id: '36a81010-cdef-4876-b06a-27e77e130a7d', setlistId: 'e009b525-5063-4e68-8fa7-22987a262f21', songId: 'bf8aca0d-a443-4669-928d-740f2fe13f34', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: 'c1a59ff4-6515-424f-9ada-d023f2d40174', setlistId: 'e009b525-5063-4e68-8fa7-22987a262f21', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'e3f7a494-297f-48ea-a85a-28e3035d4e8c', setlistId: 'e009b525-5063-4e68-8fa7-22987a262f21', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: 'c2406f14-dcc5-4ef1-a34b-7d50c8eac4ee', setlistId: 'e009b525-5063-4e68-8fa7-22987a262f21', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 4, isOpener: false, isCloser: false, feedback: null },
    { id: 'ac46807b-5711-40da-a8fe-38b30c6522e0', setlistId: 'e009b525-5063-4e68-8fa7-22987a262f21', songId: 'acd92256-9bf8-4f2e-bcc0-717a45800842', position: 5, isOpener: false, isCloser: false, feedback: 'Taya sounded great' },
    { id: '08c3f0a5-0d5f-4278-8042-b3cea364a4d0', setlistId: 'e009b525-5063-4e68-8fa7-22987a262f21', songId: 'c4bc3ce2-9610-4994-a30c-1639cfb95d78', position: 6, isOpener: false, isCloser: true, feedback: null },
    { id: '3927db60-19a3-4e25-b774-31d7de8e7556', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: 'b9a2fe01-6458-4f5f-a624-5135ebdef480', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'f605a4ab-b9ed-4ed1-b82f-18ddd65bcbc7', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: '8a2acf42-8109-4b21-8f48-74280f129539', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: 'acd92256-9bf8-4f2e-bcc0-717a45800842', position: 4, isOpener: false, isCloser: false, feedback: null },
    { id: '77d0fab9-0dc3-4b15-83aa-2775a1340138', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: '9d8ec47e-a2dd-4983-908f-55ef3d721c2b', position: 5, isOpener: false, isCloser: false, feedback: null },
    { id: 'd7f3bb44-5095-40eb-8f9b-bc49ef61437f', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: 'ab2a62fc-098c-4dd2-a1df-ab97f3eaf8d1', position: 6, isOpener: false, isCloser: false, feedback: null },
    { id: 'b7b661dc-c39e-4e7f-8ae6-d257c29a6ea6', setlistId: 'f956377b-a831-4a1c-9de5-e9c0a3a7d95c', songId: 'c2b82417-5722-45a3-8dc6-bb8c5d02ae9a', position: 7, isOpener: false, isCloser: true, feedback: null },
    { id: '0ff87b30-8376-4ba1-a35b-a6251743def7', setlistId: '92f3e4af-5297-4d91-9ccd-9106f822f9da', songId: '44153508-c7f5-4027-bb88-42ccdc65a1ec', position: 1, isOpener: true, isCloser: false, feedback: null },
    { id: '08bac2a7-4f92-49ee-a45e-ef0bdcc77711', setlistId: '92f3e4af-5297-4d91-9ccd-9106f822f9da', songId: '89192951-7ff5-4c55-a433-74e39bf27501', position: 2, isOpener: false, isCloser: false, feedback: null },
    { id: 'f7d801f1-8e15-4bc4-a63c-6d97ec1953ab', setlistId: '92f3e4af-5297-4d91-9ccd-9106f822f9da', songId: 'f05b49af-978d-4ba5-b1df-fd2270f8baaa', position: 3, isOpener: false, isCloser: false, feedback: null },
    { id: 'd4d98720-1a6e-4723-bc10-ef3fadb6b29e', setlistId: '92f3e4af-5297-4d91-9ccd-9106f822f9da', songId: '04f5f2d5-7650-47c1-90d8-8d9e714497fa', position: 4, isOpener: false, isCloser: true, feedback: null },
  ];

  await prisma.setlistSong.createMany({ data: setlistSongs });
  console.log(`Inserted ${setlistSongs.length} setlist song items.`);

  // 5. Insert Transactions
  const transactions = [
    { id: 'cfe3a612-a047-472e-be06-74b6e916e842', date: new Date('2024-03-01T00:00:00.000Z'), amount: 250.0, type: 'INCOME', category: 'Gig Pay', description: 'Sea Shepherd', attachmentLink: 'https://drive.google.com/file/d/1pJQEaelJagSCD-T92QrfLXq5CvQw68ZP/view?usp=drive_link' },
    { id: '1e1d2ad5-0469-44a3-bba0-8094f92d9ed2', date: new Date('2024-03-29T00:00:00.000Z'), amount: 300.0, type: 'INCOME', category: 'Gig Pay', description: 'Indi Bar', attachmentLink: 'https://drive.google.com/file/d/1stmCs9qN2b1CCcaX_ntr79VK-jJ3AkfA/view?usp=drive_link' },
    { id: 'd022ef23-9f43-4e81-ac0a-04a30a85b49e', date: new Date('2024-02-15T00:00:00.000Z'), amount: 200.0, type: 'INCOME', category: 'Gig Pay', description: 'SWA Party', attachmentLink: 'https://drive.google.com/file/d/1Qt-_Tnu4cQ9TevFK-ZvMZx51KjortZ4f/view?usp=drive_link' },
    { id: '9160e2a2-9495-4c15-887f-fe8ad33ffdb1', date: new Date('2024-04-12T00:00:00.000Z'), amount: 150.0, type: 'INCOME', category: 'Gig Pay', description: 'The Bird with Goddamn Darlings', attachmentLink: null },
    { id: '81a4801a-cd37-4274-a941-470c5ba2621a', date: new Date('2024-03-30T00:00:00.000Z'), amount: 100.0, type: 'EXPENSE', category: 'Photography', description: 'Cassius @ Indi Bar', attachmentLink: 'https://drive.google.com/file/d/1jpzyj4m84k2h5KLx1Ra6ULGUeXwxtDGp/view?usp=drive_link' },
  ];

  await prisma.transaction.createMany({ data: transactions });
  console.log(`Inserted ${transactions.length} transactions.`);

  // 6. Insert RoadmapItems
  const roadmapItems = [
    { id: '425f94c2-3129-457a-b3aa-82f38916e939', title: 'Write new originals', status: 'DONE' },
    { id: '67dffafe-713e-4eb9-83de-630ac4e8674c', title: 'Setup band bank account', status: 'DONE' },
    { id: 'e1be5368-18cf-4d6e-a6a2-a3b855868ef6', title: 'Get specific soundcheck song', status: 'TODO' },
    { id: '0d1c67e2-7b68-453e-8051-1020d6a56392', title: 'Record Help Me demo', status: 'TODO' },
    { id: '261ca050-ed45-43b5-a9eb-023a34486a9e', title: 'Record Apples demo', status: 'TODO' },
    { id: '31b4ac7b-2e5c-4498-9f0c-2c600f9f2ebc', title: 'Record Hatman demo', status: 'TODO' },
    { id: '42ecc31e-8384-44c4-971b-205d0bcf8c19', title: 'Find and contact recording studio', status: 'TODO' },
  ];

  await prisma.roadmapItem.createMany({ data: roadmapItems });
  console.log(`Inserted ${roadmapItems.length} roadmap items.`);

  console.log('Database restoration completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
