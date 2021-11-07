import Server from './apps/server';

const respondToException = (err: Error) => {
  console.log(err);
  process.exitCode = 1;
};

process.on('uncaughtException', respondToException);
process.on('unhandledRejection', respondToException);

Server.start().catch(respondToException);
