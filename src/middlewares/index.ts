import cors from 'cors';
import express from 'express';

export default () => {
    return [express.json(), express.urlencoded({ extended: true }), cors()];
};
