import { GetServerSideProps } from "next";
import React from "react";

type Props = {
  user: string;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { user } = params!;

  return {
    props: {
      user,
    },
  };
};

const GreetUser = ({ user }: Props) => {
  return <div>Hello {user}!</div>;
};

export default GreetUser;
